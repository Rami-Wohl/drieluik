import { Pageheader } from "~/components/ui/pageheader";

function ContactCard({
  name,
  title,
  street,
  zip,
  city,
  phone,
  email,
}: {
  name: string;
  title: string;
  street: string;
  zip: string;
  city: string;
  phone?: string;
  email: string;
}) {
  return (
    <div className="flex h-52 w-auto max-w-full flex-col justify-between rounded-md border-2 border-black border-opacity-50 bg-white bg-opacity-20 px-6 py-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:w-[450px] lg:text-base">
      <div>
        <div className="text-lg font-semibold text-black">{name}</div>
        <div className="mb-2 text-sm font-semibold">{title}</div>
      </div>
      <div className="text-sm">
        <div>{street}</div>
        <div className="mb-2 flex flex-row gap-2">
          <span>{zip}</span>
          <span>{city}</span>
        </div>
      </div>
      <div className="flex h-12 flex-col justify-end text-sm">
        {phone && <div>{phone}</div>}
        <div>{email}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <Pageheader text="Contact" />
        <div className="relative mx-1 flex flex-col items-center justify-center">
          <h2 className="my-6 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Voor vragen, opmerking of het delen van leuke gebruikerservaringen
            kunt u contact opnemen met:{" "}
          </h2>
          <div className="relative flex max-w-full flex-col gap-8 lg:flex-row">
            <ContactCard
              name="Devi Hisgen"
              title="Verslavingsdeskundige bij Antes Rotterdam zuid"
              street="Dynamostraat 18"
              zip="3083AK"
              city="Rotterdam"
              phone="0651029460"
              email="d.hisgen@anteszorg.nl"
            />
            <ContactCard
              name="Eveline Rietdijk"
              title="Klinisch Psycholoog bij Antes Rotterdam zuid"
              street="Dynamostraat 18"
              zip="3083AK"
              city="Rotterdam"
              email="e.rietdijk@anteszorg.nl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
