import { Heading } from '../components/layout/heading';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

interface FormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  phone: number;
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const schema = yup.object().shape({
  firstName: yup.string().required('* Required'),
  lastName: yup.string().required('* Required'),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  address: yup.string().required('* Required'),
  phone: yup
    .string()
    .matches(phoneRegExp, '* Contact number is not valid')
    .required('* Required'),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isValidating },
  } = useForm<FormInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormInputs> = data => {
    console.log(data);
    reset();
  };

  return (
    <section>
      <Heading title="form" subTitle="create new user profile" />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="grid grid-cols-1 justify-between gap-20 md:grid-cols-2 ">
        <div className="mb-8">
          <label
            htmlFor="first-name"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter First Name"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                isValidating ? 'border-orange-400' : ''
              }
              ${
                errors.firstName
                  ? 'border-red-400'
                  : 'border-sky-400 text-second'
              }`}
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="mt-2 text-xl text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="last-name"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter Last Name"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                isValidating ? 'border-orange-400' : ''
              }
              ${
                errors.lastName
                  ? 'border-red-400'
                  : 'border-sky-400 text-second'
              }`}
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className="mt-2 text-xl text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@domain.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                isValidating ? 'border-orange-400' : ''
              }
              ${
                errors.email ? 'border-red-400' : 'border-sky-400 text-second'
              }`}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-2 text-xl text-red-500">
              {'* ' +
                errors.email.message?.[0].toUpperCase() +
                errors.email.message?.slice(1)}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Super Password"
            aria-invalid={errors.password ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                errors.password
                  ? 'border-red-400'
                  : 'border-sky-400 text-second'
              }`}
            {...register('password')}
          />
          {errors.password && (
            <p className="mt-2 text-xl text-red-500">
              {'* ' +
                errors.password.message?.[0].toUpperCase() +
                errors.password.message?.slice(1)}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="address1"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            First Address
          </label>
          <input
            type="address"
            id="address"
            placeholder="Enter Your Address"
            aria-invalid={errors.address ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                errors.address ? 'border-red-400' : 'border-sky-400 text-second'
              }`}
            {...register('address')}
          />
          {errors.address && (
            <p className="mt-2 text-xl text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="phone-number"
            className={`mb-2 block text-2xl font-bold text-base-color`}>
            Contact Number
          </label>
          <input
            type="text"
            id="phone-number"
            placeholder="Enter Contact Number"
            aria-invalid={errors.phone ? 'true' : 'false'}
            className={`
              block w-full border-b-2 bg-base-color py-2 px-4 text-2xl 
              text-base-color placeholder-slate-500 outline-none placeholder:text-xl ${
                errors.phone ? 'border-red-400' : 'border-sky-400 text-second'
              }`}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-2 text-xl text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="relative">
          <button
            disabled={!isValid}
            title={!isValid ? 'form is not valid' : ''}
            className={`${!isValid ? 'cursor-not-allowed' : ''}
            place-self-start rounded bg-base-color py-4 px-8 text-xl text-base-color
            shadow-md ring-indigo-400 transition-all duration-200 hover:text-second hover:ring-1`}>
            <span>Submit Form</span>
          </button>
          <ArrowPathIcon
            title="reset form"
            className={`icon absolute top-1/2 left-52 -translate-y-1/2`}
            onClick={() => reset()}
          />
        </div>
      </form>
    </section>
  );
};
