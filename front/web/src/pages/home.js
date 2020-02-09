/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Home = () => {
    return (
        <div>
            <Sidebar />,
        <Header />,
        <div className="ml-64">
                <hr />
                <main className="my-8">
                    <div className=" mx-auto w-full lg:flex">
                    <img class="h-700 mx:w-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/frases-mas-inspiradoras-cine-ciudades-de-papel-1533578354.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Sunset in the mountains"/>
                        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                
                                <div className="text-black font-bold text-xl mb-2">Ciema</div>
                                <p className="text-grey-darker text-base">"Tienes que perderte antes de encontrarte".</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="https://scontent.fuio7-1.fna.fbcdn.net/v/t1.0-9/84244464_2619677368087507_6775465743011020800_n.jpg?_nc_cat=108&_nc_ohc=uUyCM0vEXzsAX-gXlCF&_nc_ht=scontent.fuio7-1.fna&oh=b026cbf7dffe81496b4b7aba58b4aaa5&oe=5EB546BD" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-black leading-none">Roger CEdeño</p>
                                    <p className="text-grey-dark">Edad 23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;