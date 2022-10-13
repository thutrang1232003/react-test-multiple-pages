import React from "react";
import './page.css';
import Card from "../components/Card/Card";
import pic7 from './images/pic7.jfif';
import pic8 from './images/pic8.jfif';
import pic9 from './images/pic9.jfif';
import pic10 from './images/pic10.jfif';
import pic11 from './images/pic11.jfif';
import pic12 from './images/pic12.jfif';

const Page2 = () => {
    return (
       <div>
            <div className="row">
                <Card 
                    frontInFinnish="MITÄ HE TEKEVÄT?"
                    frontInEnglish="What do they do?" 
                    backInFinnish="TANSSIVAT" 
                    backInEnglish="dance" 
                    imgSrc={pic7}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does he do?" 
                    backInFinnish="AJAA" 
                    backInEnglish="drives" 
                    imgSrc={pic8}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="NAURAA" 
                    backInEnglish="smiles" 
                    imgSrc={pic9}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="LEPÄÄ" 
                    backInEnglish="rests" 
                    imgSrc={pic10}
                />
                <Card 
                    frontInFinnish="MITÄ HÄN TEKEE?"
                    frontInEnglish="What does she do?" 
                    backInFinnish="LUKEE" 
                    backInEnglish="reads" 
                    imgSrc={pic11}
                />
                <Card 
                    frontInFinnish="MITÄ HE TEKEVÄT?"
                    frontInEnglish="What do they do?" 
                    backInFinnish="KATSELEVAT" 
                    backInEnglish="watch" 
                    imgSrc={pic12}
                />
            </div>
        </div>
    )
}

export default Page2;


