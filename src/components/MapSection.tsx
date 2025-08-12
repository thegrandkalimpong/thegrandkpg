import { MapPin, Phone } from "lucide-react";
import React from "react";
import Map from "./Map";

const MapSection = () => {
    return (
        <section className="mx-auto mt-32 w-full max-w-6xl pt-24">
            <h1 className="font-mageline text-moss-light mb-24 text-center text-5xl font-semibold">
                Call Us to Book Your Stay
            </h1>
            <div className="flex flex-col gap-8 lg:flex-row">
                <Map />
                <div className="basis-1/2">
                    <p className="mb-16 indent-8">
                        Tucked close to Kalimpong&apos;s most loved spots, The
                        Grand Kalimpong makes it easy to explore the charm of
                        the hills. Take a peaceful walk to the Tharpa Choling
                        Monastery or soak in the beauty of Mangal Dham
                        Temple—they&apos;re just around the corner. From scenic
                        trails to bustling local markets, all your adventures
                        start just a few steps away.
                    </p>
                    <div className="mb-4 flex items-center gap-2">
                        <div className="bg-moss-light aspect-square rounded-full p-2">
                            <MapPin className="text-cream" />
                        </div>
                        <p className="">
                            Chibbo Approach Road, Kalimpong, 734301
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-moss-light aspect-square rounded-full p-2">
                            <Phone className="text-cream" />
                        </div>
                        <p className="">
                            9064502191 / 8697719179 / 9832081553{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
