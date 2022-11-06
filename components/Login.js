import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
