import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="bg-cream flex h-svh flex-col items-center justify-center p-8 text-center">
            <Image
                src={"/not-found.svg"}
                width={400}
                height={400}
                alt="Not Found"
                className=""
            />
            <h1 className="text-greenish/80 font-mageline mb-4 text-4xl font-medium">
                OOPS! Page Not Found
            </h1>
            <p className="text-greenish/70 mb-8 text-lg font-medium sm:max-w-md md:max-w-lg">
                The page you are looking for does not exist or has been moved.
                Please check the URL or return to the{" "}
                <Link
                    href={"/"}
                    className="text-greenish/90 hover:bg-greenish/10 rounded p-1 font-semibold underline transition-colors duration-200"
                >
                    homepage
                </Link>
                .
            </p>
        </div>
    );
};

export default NotFoundPage;
