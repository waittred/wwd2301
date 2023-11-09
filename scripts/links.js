const baseURL = 'https://waittred.github.io/wdd230/'
const linksURL = 'https://waittred.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();
const displayLinks = (weeks) => {
        weeks.forEach((week) => {
	let card = document.createElement('li');
	card.textContent = `${week.week}: `;
            
            week.links.forEach((link) => {
	            let link=document.createElement('a')
                link.setAttribute('href', links.url);
                link.textContent = ` ${links.title} |`;
                console.log(link)
                card.appendChild(link)
       })
        
        cards.appendChild(card);
    });
}




//    const displayLinks = (weeks) => {
//        weeks.forEach((week) => {
//            const weekHeading = document.createElement('h4');
//            weekHeading.textContent = `Week ${week.lesson}`;
//            linksContainer.appendChild(weekHeading);
  //  
    //        const linkList = document.createElement('ul');
    //
      //      week.links.forEach((link) => {
        //        const listItem = document.createElement('li');
          //      const anchor = document.createElement('a');
            //    anchor.href = `${link.url}`;
              //  anchor.textContent = link.title;
//                listItem.appendChild(anchor);
  //              linkList.appendChild(listItem);
    //        });
    
      //      linksContainer.appendChild(linkList);
        //    });
//    };
        
//}   


//getLinks();

