import { MapPin, Phone } from 'lucide-react'
import React from 'react'
import Map from './Map'

const MapSection = () => {
    return (

        <div className="mx-auto mt-32 w-full max-w-6xl pt-24 text-black">
            <h1 className="font-mageline text-moss-light mb-24 text-center text-5xl font-semibold">
                Call Us to Book Your Stay
            </h1>
            <div className="flex flex-col gap-8 lg:flex-row">
                <Map />
                <div className="basis-1/2">
                    <p >
                        Tucked close to Kalimpong&apos;s most loved spots,
                        The Grand Kalimpong makes it easy to explore the
                        charm of the hills. Take a peaceful walk to the
                        Tharpa Choling Monastery or soak in the beauty of
                        Mangal Dham Temple—they&apos;re just around the
                        corner. From scenic trails to bustling local
                        markets, all your adventures start just a few steps
                        away.
                    </p>
                    {/* <div className="text-moss-dark flex w-full flex-col items-center justify-between gap-0.5 py-4 font-medium md:flex-row"> */}
                    <p className="my-8">
                        <MapPin className="mr-2 mb-2 inline md:mb-0" />{" "}
                        Chibbo Approach Road, Kalimpong, 734301
                    </p>
                    <p>
                        <Phone className="mr-2 mb-2 inline md:mb-0" />{" "}
                        9064502191 / 8697719179 / 9832081553{" "}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MapSection
