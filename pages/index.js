import Image from 'next/image';
import { Inter } from 'next/font/google';
import BaseLayout from '@/components/templates/BaseLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BaseLayout>
      <div className="flex justify-center  h-screen ">
        <div className="flex flex-col items-center mt-60">
          <div className="flex font-starwars text-7xl gap-1">
            <div className="flex mr-2 hover:text-yellow-400 " data-aos="fade-down" data-aos-duration="500">
              <p className="">S</p>
              <p className="">T</p>
            </div>
            <p className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="800">
              A
            </p>
            <p className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="1000">
              R
            </p>
          </div>
          <div className="flex font-starwars text-7xl gap-1">
            <p className="hover:text-yellow-400" data-aos="fade-up" data-aos-duration="1000">
              W
            </p>
            <p className="ml-3 hover:text-yellow-400" data-aos="fade-up" data-aos-duration="800">
              A
            </p>
            <div className="flex hover:text-yellow-400" data-aos="fade-up" data-aos-duration="500">
              <p className="">R</p>
              <p className="">S</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
