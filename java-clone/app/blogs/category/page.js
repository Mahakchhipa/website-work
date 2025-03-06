import Link from "next/link";
export default function Category() {
  return (
    <>
      <div className="grid py-[120px] justify-center gap-6 px-6">
        <div className="responsive-text flex flex-col items-center justify-center">
          <h1>Sorry!</h1>
          <p>The Page You are Looking is Not Available</p>
        </div>
        <div>
          <img
            src="/assets/404-landing-page-free-vector.jpg"
            className="w-[400] md:h-[400px]"
          />
        </div>
        <div className="responsive-text flex flex-col items-center justify-center">
          <p>
            The link you followed may be broken, or the page may have been
            removed. Don't Worry,
          </p>
          <Link href="/" className="text-blue-700 font-bold">
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
