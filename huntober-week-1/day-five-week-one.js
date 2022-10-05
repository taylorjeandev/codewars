// Here are the rules these submissions had to follow:

// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)

//Middle character may not be 'e' (if there are an even number of characters, look at the next one after mid-point. For example center has a middle character of t)

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)

// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)

// Send me a DM of the puns that made the cut on Twitter, and go ahead and save the final count to use tomorrow. Thanks!

let puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

function noDogs(str){
    return str.includes('dog' || 'bark' || 'bone').toLowerCase()
}

function reducingArray(puns){
    //turn string into an array for easier handling
    let arrayOfPuns = puns.split(",")

    //remove elements that have whitespace at beginning or end of string
    let noWhitespace = arrayOfPuns.filter((i) => i[0] !== " " && i.length - 1 !== " ")

    //remove elements that length is not a multiple of 5
    let notDivisibleByFive = noWhitespace.filter((i) => i.length % 5 !== 0)
        arrayOfPuns = notDivisibleByFive;
            
         console.log(arrayOfPuns)   
}


