import Image from "next/image";
import loader from '@/assets/loader.gif'

export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src={loader}
                alt="Loading..."
                width={100}
                height={100}
                priority
            />
        </div>
    );
}