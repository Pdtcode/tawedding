"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { ClipLoader } from 'react-spinners';


function Gallery() {

  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  // Array of image URLs
  const imageUrls = [
    'https://lh5.googleusercontent.com/d/1vLbrboazXCarEAkoiW7L9o7Ab1wYNJvZ',
    'https://lh5.googleusercontent.com/d/1FqFpxtA8X3zYSBHaxLbUlE0mZCs-1zQF',
    'https://lh5.googleusercontent.com/d/1XbWw9V8y8WNLSsUQ7ZZENbseUV_JcSA5',
    'https://lh5.googleusercontent.com/d/1nHvICrbUMm_Bq6mi3P0sI1gQeE7DpOaT',
    'https://lh5.googleusercontent.com/d/1ZwFyqyJqxef7K01SVysOtwBnnBTRMJwD',
    'https://lh5.googleusercontent.com/d/1_QD2shvlrjmIml8cpuJRj_ckRUgN-qdr',
    'https://lh5.googleusercontent.com/d/1FaUy7eZVSwM8lDutP06amEIPFRzT8zic',
    'https://lh5.googleusercontent.com/d/1hwYLCceNavbjSRs89ZQrd6W59CRzrk3t',
    'https://lh5.googleusercontent.com/d/14jlxIuSUUvhL773lUAIBzDsQ24N1uI5U',
    'https://lh5.googleusercontent.com/d/1iGazb8GTADVqDk42cZRxV_HSfSQxqJWu',
    'https://lh5.googleusercontent.com/d/150OdihhcP-U9yK7UJ-I3fwsmfijmU3bn',
    'https://lh5.googleusercontent.com/d/1YdZ8GJ3Ibz0MmbtpcUef4yF7OPEO6Slf',
    'https://lh5.googleusercontent.com/d/1KUxVmsLQyi3shgNZl5uMcub_iMoUZITe',
    'https://lh5.googleusercontent.com/d/1INWX9FIDKOUYS7GXeTcyhSh3RCGwFuxi',
    'https://lh5.googleusercontent.com/d/1utIxofJ-hObPYEWwD800UbF6qh7DubKH',
    'https://lh5.googleusercontent.com/d/1CXkkopPrEJCAZI7g9OEolnMNSBgNhH01',
    'https://lh5.googleusercontent.com/d/1i73kDA4gnabbHBSk5ecLU_eTUS8USdew',
    'https://lh5.googleusercontent.com/d/18FIqJs56Etl7_og7vX2C3TSP0xmihI40',
    'https://lh5.googleusercontent.com/d/1_u9RZf7kNXEZc3wBykYHnNesb_HSRRZI',
    'https://lh5.googleusercontent.com/d/18ndmWHaAg9-TPD_Z9SAFDlwCa5mNzIT8',
    'https://lh5.googleusercontent.com/d/1j0rb1iCE3H_j8D549X3TQC2VKQNJsiYG',
    'https://lh5.googleusercontent.com/d/1jnuAzVS7W85rANlktpl4WQURbx66XArX',
    'https://lh5.googleusercontent.com/d/1NmGyk7CCM59TwLw26D-evP_N5fFphjkT',
    'https://lh5.googleusercontent.com/d/1HTFkeTNsaYSncZwoKh6yUIinnIqYwDaN',
    'https://lh5.googleusercontent.com/d/17v3Nx-ZHy5FxKlnm94ul8bzRhCPB_wLe',
    'https://lh5.googleusercontent.com/d/1_IH98oSU6d59VEET_dZIvmDNPkVDmMSO',
    'https://lh5.googleusercontent.com/d/1qPqTNsf88dmVMJKj4L9CFlGraFdBAInw',
    'https://lh5.googleusercontent.com/d/1-EuDO5g6rRsrG27gDV9tHdGmNQx9yHgm',
    'https://lh5.googleusercontent.com/d/1XI_KZ26HhcZy0cSNSoB0Fm8b_ecDiL5R',
    'https://lh5.googleusercontent.com/d/1Qo-d3D9gVRBRXE4qVymaq3c2juMY4GWB',
    'https://lh5.googleusercontent.com/d/1Ts0HqX0Oe1IYhUQVsXJTWTnMqrDfCgyJ',
    'https://lh5.googleusercontent.com/d/1YCbKZ-PBX11gmb10kCZUwvmxA9yN0qMX',
    'https://lh5.googleusercontent.com/d/1DV0xetXTt4pcB8rUPvCR-FpCybJ_looZ',
    'https://lh5.googleusercontent.com/d/199YOEv2I141zOYWP3bg4-kypv4PHe8q8',
    'https://lh5.googleusercontent.com/d/1alpbWqp2987y_Hn5cQqSFJCoWhiMBgRO',
    'https://lh5.googleusercontent.com/d/1h5ZccP7_5xDyi25A6d9fxnCVa0KomG1W',
    'https://lh5.googleusercontent.com/d/1fMIQtkGTTXRSq0kS_MvDfwB7SYuDcK1A',
    'https://lh5.googleusercontent.com/d/1Fsmm6UvA3Y_3yeabi1yTdbw4IoiDf_ap',
    'https://lh5.googleusercontent.com/d/1V_A5UDRlocUGW0-YwgC7R54j8Qw74_-a',
    'https://lh5.googleusercontent.com/d/12xho0Sqp656pzDU1_hLlwXAXMM0sa1Dc',
    'https://lh5.googleusercontent.com/d/19FGJErnkPeIGgLcQiw7ruuDYcpNkTPM1',
    'https://lh5.googleusercontent.com/d/1auihgFEwwwpPSO-WQZUNesrMcwen-dDt',
    'https://lh5.googleusercontent.com/d/19VG4gmtA8-2Z5hjR9XEngaNfLthySybn',
    'https://lh5.googleusercontent.com/d/1WRaHa87TMzXznT1yJZ6h6qxE8gyQufUX',
    'https://lh5.googleusercontent.com/d/1DAUdAwvBZ3xkN2HOHHULXOeR3XMG6QOU',
    'https://lh5.googleusercontent.com/d/1BurgadTh-UBTwT6ydPMJGFtwf8ei2kC-',
    'https://lh5.googleusercontent.com/d/1Z8TyqoWrE7h0JSM1RUn5dxGLGTXL0Csf',
    'https://lh5.googleusercontent.com/d/1-tq4lF7aHWmjJZnXTXfLONjtak3gRdZH',
    'https://lh5.googleusercontent.com/d/1pha7IfWjxFyJgnWeWsVTmG-ZRu8hzeys',
    'https://lh5.googleusercontent.com/d/1J9C_I7v4WY0xxVzAM3KJfBBIqKHcpXwN',
    'https://lh5.googleusercontent.com/d/1jC0BgBRdN5WPr1iAR6v6t1UXrPeGDmho',
    'https://lh5.googleusercontent.com/d/1Y0iUQoN1SO61Us6r_clwgM0ZJai-jw_z',
    'https://lh5.googleusercontent.com/d/1WEqVbGADrJYKCI82TmA8tWzs8FgL3M5M',
    'https://lh5.googleusercontent.com/d/11X2YcfqSn74KulbytRm-phYG4ThsPwjU',
    'https://lh5.googleusercontent.com/d/1M-O_pqPH61xmNJwMAyJHiXltrQu5mtbN',
    'https://lh5.googleusercontent.com/d/1_CkDu7PV-0ntENI1t5mzLL3QSgQNh4Xz',
    'https://lh5.googleusercontent.com/d/1TOTscG-jIiRUePxgMRYHYR47DXYh9iUD',
    'https://lh5.googleusercontent.com/d/1t_MC_CU5VgGoNeKSt55KCJi_hdaj-ZLA',
    'https://lh5.googleusercontent.com/d/1O-w9bLLkmNFyXOOQc0CnyHs9KEz0LzwH',
    'https://lh5.googleusercontent.com/d/1IjPib91DkSCUi9Hto5SRTeyEkdj_xqR8',
    'https://lh5.googleusercontent.com/d/1_zm1Gy03ehigHmbe_nydnKPXQc2-Q0Po',
    'https://lh5.googleusercontent.com/d/1dkLBXGniataZhSkM0VeX7HpTnV2ou43D',
    'https://lh5.googleusercontent.com/d/1F9IKNohJ9V5E0qn4G-znufMiGEjwvYRI',
    'https://lh5.googleusercontent.com/d/1TFCEnX2JBIm-zBX567nhmP2m9YeZZAoN',
    'https://lh5.googleusercontent.com/d/12DqAeSOL3DK7ogYNIcyhc1EG08nlF4pK',
    'https://lh5.googleusercontent.com/d/1pYMovrEMKQQ2E_y62JeZzmlAVlIeir_D',
    'https://lh5.googleusercontent.com/d/10hpfCS3lnFErnHb0eN1RErR4eZ2fPlk6',
    'https://lh5.googleusercontent.com/d/1Kp-M8vqgolhTGpNh-5ApWAG93JbM9gSk',
    'https://lh5.googleusercontent.com/d/1cqY7DI3Hwz3pk_56Vv_aXwiOJz2dg3JE',
    'https://lh5.googleusercontent.com/d/14alrzHId82j1uhx6akUdlgFFC8L4rdkR',
    'https://lh5.googleusercontent.com/d/1n33cQENuJ6EN0bN0tjCd2LNZJK77jLch',
    'https://lh5.googleusercontent.com/d/1GI5SU764Jh5DS5Q1aGaFzv3zymWNfLj1',
    'https://lh5.googleusercontent.com/d/14KLHlMeITnOunODZQCbG8lR6S3jzAomQ',
    'https://lh5.googleusercontent.com/d/17JZqbtwVQVm3BqdXw2am88dMbSJfhyFR',
    'https://lh5.googleusercontent.com/d/1tv0MIPtdhA8NPwlMDLDSVwswpptvTvfl',
    'https://lh5.googleusercontent.com/d/1Aj0LysoWTOXNdqPvF_W04k_2zJFk84JD',
    'https://lh5.googleusercontent.com/d/1OCsXEewilIPfnANTznWrd9D0ry9aZF1p',
    'https://lh5.googleusercontent.com/d/1gmmh7EwY8HOYuFPHoDgVdLDPVxalvEV2',
    'https://lh5.googleusercontent.com/d/19_diuFBnKmklo7dxHl3Ps4khxRQdQEI4',
    'https://lh5.googleusercontent.com/d/1L0t60ivx1Msg9QXbyoCFP7Iqhy8HCKkT',
    'https://lh5.googleusercontent.com/d/1_AUCL_vpFr1e7TMcV57klpip5wikMbYA',
    'https://lh5.googleusercontent.com/d/1deom7-Ydazyx6UrqBI5eN0xJdeJitap5',
    'https://lh5.googleusercontent.com/d/1GaibqyMetGjOIdb8iG1Bi-e4iRL1Fmac',
    'https://lh5.googleusercontent.com/d/1upWtFKmKwG9eGnL2EpzwWdWcG9s-tDO2',
    'https://lh5.googleusercontent.com/d/1_nOS-IyHhDu2ZNsDuRremMSN8vauzV4G',
    'https://lh5.googleusercontent.com/d/1udFz-6E3vWNaW2Tjso0pVXHJOt_mbN0I',
    'https://lh5.googleusercontent.com/d/1zVMJJ-qyVLBbbBVmubTglV4FAcMFSejR',
    'https://lh5.googleusercontent.com/d/1V_rzCoUYd1r_FDhsWDlePilfmkJ3fkW3',
    'https://lh5.googleusercontent.com/d/1evkw46j9673EFA3tSt88XsFLMvSpyCiJ',
    'https://lh5.googleusercontent.com/d/1JWT0JZW0yUa2y7nrFWSLwkHyjOjvpfzA',
    'https://lh5.googleusercontent.com/d/1MxkbjhgKWJR0uOeoGBpXspiIRHNBu32J',
    'https://lh5.googleusercontent.com/d/1rUbmz7Mxhzx9xcoUFt3oVwRW3osMQy3N',
    'https://lh5.googleusercontent.com/d/1V1YbVe7noUSX-eOHXXRlwOQAPIEGh7nw'
    
    // Add more URLs as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className='max-w-[1240px] mb-10 mt-10 mx-auto text-center'>
      <h1 className='text-6xl p-6 mb-10'>Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center'>
        {/* Loop over imageUrls array and generate Image components */}
        {imageUrls.map((url, index) => (
          <div key={index} className="relative w-100 h-100"> {/* Set fixed width and height to make it square */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <ClipLoader color="#301e0e" loading={loading} size={50} />
              </div>
            )}
            <Image
              key={index} // Add a unique key for each image
              width={500}
              height={500}
              alt={`Picture ${index + 1}`} // Alt text with index for accessibility
              src={url}
              onLoad={handleImageLoad} // Hide loader once the image is loaded
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-10 right-10 bg-[#301e0e] text-white p-3 opacity-80 rounded-md shadow-lg hover:opacity-60 transition duration-300'
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default Gallery;