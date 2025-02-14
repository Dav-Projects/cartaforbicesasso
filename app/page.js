import Image from "next/image";
import Link from "next/link";

export default function Home() {
    
    return (
        <div className="container mx-auto h-screen flex flex-col items-center justify-center gap-2 p-2">
            <h1 className="title">Benvenuto in carta-forbice-sasso</h1>
            <p className="subtitle">Come vuoi giocare?</p>
            <div className="w-full flex flex-row justify-center items-center gap-4 mt-6">
                <Link 
                    href={{
                        pathname: '/game',
                        query: { type: 'pchuman' },
                    }} 
                    className=""
                >   
                    <div className="size-32 md:size-60 cursor-pointer bg-yellow-200 text-gray-800 font-bold text-2xl flex justify-center items-center rounded-lg">
                        PC vs UMANO
                    </div>
                </Link>
                <Link 
                    href={{
                        pathname: '/game',
                        query: { type: 'pcpc' },
                    }} 
                    className=""
                >   
                    <div className="size-32 md:size-60 cursor-pointer bg-pink-200 text-gray-800 font-bold text-2xl flex justify-center items-center rounded-lg">
                        PC vs PC
                    </div>
                </Link>
            </div>
        </div>
    );
}
