import React from "react";
import './page.css';
import Card from "../components/Card/Card";
import pic1 from './images/image1.jpg';
import pic2 from './images/pic2.jfif';
import pic3 from './images/pic3.jfif';
import pic4 from './images/pic4.jfif';
import pic5 from './images/pic5.jfif';
import pic6 from './images/pic6.jfif';

const Page1 = () => {
    return (
       <div>
            
            <div className="row">
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="JUOKSEE" 
                    backInEnglish="runs" 
                    imgSrc={pic1}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does he do?" 
                    backInFinnish="LAULAA" 
                    backInEnglish="sings" 
                    imgSrc={pic2}
                />
                <Card 
                    frontInFinnish="MITÄ HE TEKEVÄT?"
                    frontInEnglish="What do they do?" 
                    backInFinnish="HYPPÄÄVÄT" 
                    backInEnglish="jump" 
                    imgSrc={pic3}
                />
                <Card 
                    frontInFinnish="MITÄ VAUVA TEKEE?"
                    frontInEnglish="What does the baby do?" 
                    backInFinnish="NUKKUU" 
                    backInEnglish="sleeps" 
                    imgSrc={pic4}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="ITKEE" 
                    backInEnglish="cries" 
                    imgSrc={pic5}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="HENGITTÄÄ" 
                    backInEnglish="breathes" 
                    imgSrc={pic6}
                />
            </div>
        </div>
    )
}

export default Page1;


