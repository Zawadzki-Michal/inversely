import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mr-5">
      <section className="flex-grow">
        <div className="flex flex-col justify-evenly ml-6 lg:flex lg:mx-40 gap-10">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
            About{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">Us</span>
          </h1>

          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, laborum dolore reiciendis optio accusamus eveniet facere fugiat qui earum asperiores minima! Neque sequi est totam cupiditate. Blanditiis delectus accusamus deleniti!
            </p>
          </div>
          <div className="flex flex-col justify-between lg:flex lg:flex-row-reverse lg:gap-10 lg:align-bottom lg:w-4/5">
            <p className="text-md lg:text-lg font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius vel nesciunt tenetur reiciendis dignissimos reprehenderit libero aliquid et, minima soluta atque. Ipsum reiciendis officia ut quisquam obcaecati ullam itaque!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}