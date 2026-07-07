import { useEffect, useState } from 'react'
import api from '../../api/api'
import { Oval } from 'react-loader-spinner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationFormSchema } from '../../utils/reservationFormSchema'
import Confirm from '../form/Confirm'
import podminky from '../../assets/pdf/ucastnicke-podminky-2026.pdf'
import souhlas from '../../assets/pdf/Souhlas_se_zpracovanim_osobnich_udaju_Seznamovak_UTB_2026.pdf'

interface PostFormProps {
  batch: number
}

interface FormValues {
  batch: number
  name: string
  surname: string
  email: string
  faculty_id: string
  year: string
  nickname: string
  disability: string
  image: FileList
  roommate: string
  billing_information: {
    city: string
    street: string
    postal_code: string
    phone: string
    country: string
  }
  gdpr_consent: boolean
  newsletter_consent: boolean
}

const PostForm: React.FC<PostFormProps> = ({ batch }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  useEffect(() => {
    if (isSubmitSuccessful) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isSubmitSuccessful])

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      batch: batch,
      name: '',
      surname: '',
      email: '',
      faculty_id: '',
      year: '',
      nickname: '',
      disability: '',
      image: {} as FileList,
      roommate: '',
      billing_information: {
        city: '',
        street: '',
        postal_code: '',
        phone: '',
        country: 'Česko',
      },
      gdpr_consent: false,
      newsletter_consent: false,
    },
  })

  const img = watch('image')

  const fakulty = [
    { value: '1', label: 'Fakulta technologická' },
    { value: '2', label: 'Fakulta managementu a ekonomiky' },
    { value: '3', label: 'Fakulta multimediálních komunikací' },
    { value: '4', label: 'Fakulta aplikované informatiky' },
    { value: '5', label: 'Fakulta humanitních studií' },
    { value: '6', label: 'Fakulta logistiky a krizového řízení' },
  ]

  const rocniky = [
    { value: '1', label: 'První' },
    { value: '2', label: 'Druhý' },
    { value: '3', label: 'Třetí' },
    { value: '4', label: 'Čtvrtý' },
    { value: '5', label: 'Pátý' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSave = async (formValues: FormValues) => {

    const rawData = {
      ...formValues,
      image: img ? img[0] : null,
      
      nickname: formValues.nickname?.trim() || '---',
      disability: formValues.disability?.trim() || '---',
      roommate: formValues.roommate?.trim() || '---',
      gdpr_consent: formValues.gdpr_consent ? 1 : 0,
      newsletter_consent: formValues.newsletter_consent ? 1 : 0,
    }

    const filteredData = Object.fromEntries(
      Object.entries(rawData).filter(
        ([, value]) => value !== null && value !== undefined
      )
    )

    await api
      .post('reservations', filteredData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res)
        setIsSubmitSuccessful(true)
      })
      .catch((e) => {
        console.error(e)
        alert(
          'Nastala chyba při odesílání dat. Zkuste to prosím znovu později. Při opakovaných potížích nás kontaktujte.'
        )
        setIsSubmitSuccessful(false)
      })
  }

  return (
    <div>
      {isSubmitSuccessful ? (
        <div>
          <Confirm turnus={location.pathname.slice(-1)} />
        </div>
      ) : (
        <div className="formInput">
          <form onSubmit={handleSubmit(handleSave)}>
            <a className="text-darkPink font-bold">
              (<span style={{color: 'red'}}>*</span>) - Povinné
            </a>
            <div className="column">
              <div className="inputBox">
                <label>Jméno <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('name', { required: 'Nutno zadat jméno' })}
                />
                {errors.name && (
                  <label className="inputErrorMissing">
                    {errors.name.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Příjmení <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('surname', { required: 'Nutno zadat příjmení' })}
                />
                {errors.surname && (
                  <label className="inputErrorMissing">
                    {errors.surname.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>E-mail <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('email', {
                    required: 'Nutno zadat e-mail',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Nutno zadat správný E-mail',
                    },
                  })}
                  type="email"
                />
                {errors.email && (
                  <label className="inputErrorMissing">
                    {errors.email.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Fakulta <span style={{color: 'red'}}>*</span></label>
                <select
                  {...register('faculty_id', {
                    required: 'Nutno vybrat fakultu',
                  })}
                >
                  <option value=""></option>
                  {fakulty.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.faculty_id && (
                  <label className="inputErrorMissing">
                    {errors.faculty_id.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>Do kterého ročníku nastupuješ? <span style={{color: 'red'}}>*</span></label>
                <select
                  {...register('year', { required: 'Nutno vybrat ročník' })}
                >
                  <option value=""></option>
                  {rocniky.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <label className="inputErrorMissing">
                    {errors.year.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Jak si přeješ, abychom Tě oslovovali?</label>
                <input {...register('nickname')} />
              </div>
            </div>

            <div className="inputBox">
              <label>
                Máš nějaké potravinové (či jiné) omezení (alergie, vegan,
                vegetarián...)? Cokoliv, co bychom potřebovali vědět?
              </label>
              <input {...register('disability')} />
            </div>

            <div className="problem">
              <div className="inputBox">
                <label>
                  Chceš být na pokoji s kamarádem/kamarádkou? Napiš nám
                  jeho/její jméno!
                </label>
                <input {...register('roommate')} />
              </div>
              <div className="inputBox">
                <label>Fotografie (na které tě jde poznat) <span style={{color: 'red'}}>*</span></label>
                <label className="imageLabel" htmlFor="image">
                  {!img.length
                    ? 'Stiskni pro nahrání fotky'
                    : img[0]?.name}
                </label>
                <input
                  accept="image/jpeg, image/png, image/jpg"
                  type="file"
                  id="image"
                  {...register('image', {
                    required: 'Nutno přiložit fotku',
                    validate: {
                      fileSize: (value: FileList | null) =>
                        (value &&
                          value.length > 0 &&
                          value[0].size <= 8388608) ||
                        'Přiložený soubor je příliš velký (limit 8MB)',
                      fileType: (value: FileList | null) =>
                        (value &&
                          value.length > 0 &&
                          ['image/jpeg', 'image/png', 'image/jpg'].includes(
                            value[0].type
                          )) ||
                        'Nepodporovaný formát souboru',
                    },
                  })}
                />
                {errors.image && (
                  <label className="inputErrorMissing">
                    {errors.image.message}
                  </label>
                )}
              </div>
            </div>

            <header className="textPopis">Fakturační údaje</header>

            <div className="column">
              <div className="inputBox">
                <label>Obec <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('billing_information.city', {
                    required: 'Nutno zadat obec',
                  })}
                />
                {errors.billing_information?.city && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.city.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Adresa (ulice, číslo popisné) <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('billing_information.street', {
                    required: 'Nutno zadat adresu',
                  })}
                />
                {errors.billing_information?.street && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.street.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>PSČ <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('billing_information.postal_code', {
                    required: 'Nutno zadat PSČ',
                  })}
                />
                {errors.billing_information?.postal_code && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.postal_code.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Telefonní kontakt <span style={{color: 'red'}}>*</span></label>
                <input
                  {...register('billing_information.phone', {
                    required: 'Nutno zadat kontakt',
                  })}
                />
                {errors.billing_information?.phone && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.phone.message}
                  </label>
                )}
              </div>
            </div>

            <div className="inputBox">
              <label>Země <span style={{color: 'red'}}>*</span></label>
              <input
                {...register('billing_information.country', {
                  required: 'Nutno zadat zemi',
                })}
              />
              {errors.billing_information?.country && (
                <label className="inputErrorMissing">
                  {errors.billing_information.country.message}
                </label>
              )}
            </div>

            <header className="textPopis">
              Souhlas se zpracováním osobních údajů
            </header>

            <div className="column">
              <div className="inputCheckBoxUpper">
                <div className="inputCheckBox">
                  <div className="checkBox">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      id="gdpr_consent"
                      {...register('gdpr_consent', {
                        required: 'Nutno odsouhlasit zpracování GDPR',
                      })}
                    />
                    <div>
                      <label htmlFor="gdpr_consent" className="text-sm">
                        Souhlasím se{" "}
                        <a
                          href={souhlas}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic underline"
                        >
                          zpracováním
                        </a>{" "}
                        výše uvedených údajů a s{" "}
                        <a
                          href={podminky}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic underline"
                        >
                          účastnickými podmínkami
                        </a>{" "}
                        za účelem účasti na Seznamováku UTB.{" "}
                        <span style={{ color: 'red' }}>*</span>
                      </label>

                      {errors.gdpr_consent && (
                        <label className="inputErrorMissing text-sm">
                          {errors.gdpr_consent.message}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="inputCheckBoxLesser">
                <div className="inputCheckBox">
                  <div className="checkBox">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      {...register('newsletter_consent')}
                    />
                    <label className="text-sm">
                      Souhlas se zasíláním informačních emailů týkajících se
                      akcí pořádaných studentskou unií.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {isSubmitting ? (
              <div className="submitContainer">
                <Oval color="white" secondaryColor="lightblue" width="50px" />
              </div>
            ) : (
              <div className="submitContainer">
                <button className="submitButton">ODESLAT</button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}

export default PostForm
