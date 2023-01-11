let card_wrapper1 = document.querySelector('.wrapper1');
let newCard1 = document.querySelector('.card_name1');
let addCards1 = document.querySelector('.add-card1');

let cardList1 = [];


addCards1.addEventListener('click', () => {
    if (newCard1.value != '') {
        cardList1.push(newCard1.value);
        // console.log(cardList)  

        let newCard_list1 = document.createElement('div');
        newCard_list1.className = 'card1';

        for (let i = 0; i < cardList1.length; i++) {
            newCard_list1.innerHTML = newCard1.value;
            card_wrapper1.appendChild(newCard_list1);
        }


        if (cardList1.length > 0) {
            let card1 = document.querySelectorAll('.card1');
            for (let j = 0; j < card1.length; j++) {
                let delete_card1 = document.createElement('div');
                delete_card1.className = 'delete1';
                delete_card1.innerHTML = "X";
                card1[j].appendChild(delete_card1);

                delete_card1.addEventListener('click', () => {
                    card_wrapper1.removeChild(card1[j]);
                })
            }
        }
        newCard1.value = '';
    }
})

new Sortable(card_wrapper1, {
    animation: 400
});

let card_wrapper2 = document.querySelector('.wrapper2');
let newCard2 = document.querySelector('.card_name2');
let addCards2 = document.querySelector('.add-card2');

let cardList2 = [];

addCards2.addEventListener('click', () => {
    if (newCard2.value != '') {
        cardList2.push(newCard2.value);
        // console.log(cardList)  

        let newCard_list2 = document.createElement('div');
        newCard_list2.className = 'card2';

        for (let i = 0; i < cardList2.length; i++) {
            newCard_list2.innerHTML = newCard2.value;
            card_wrapper2.appendChild(newCard_list2);
        }


        if (cardList2.length > 0) {
            let card2 = document.querySelectorAll('.card2');
            for (let j = 0; j < card2.length; j++) {
                let delete_card2 = document.createElement('div');
                delete_card2.className = 'delete2';
                delete_card2.innerHTML = "X";
                card2[j].appendChild(delete_card2);

                delete_card2.addEventListener('click', () => {
                    card_wrapper2.removeChild(card2[j]);
                })
            }
        }
        newCard2.value = '';
    }
})

new Sortable(card_wrapper2, {
    animation: 400
});


let card_wrapper3 = document.querySelector('.wrapper3');
let newCard3 = document.querySelector('.card_name3');
let addCards3 = document.querySelector('.add-card3');

let cardList3 = [];

addCards3.addEventListener('click', () => {
    if (newCard3.value != '') {
        cardList3.push(newCard3.value);
        // console.log(cardList)  

        let newCard_list3 = document.createElement('div');
        newCard_list3.className = 'card3';

        for (let i = 0; i < cardList3.length; i++) {
            newCard_list3.innerHTML = newCard3.value;
            card_wrapper3.appendChild(newCard_list3);
        }


        if (cardList3.length > 0) {
            let card3 = document.querySelectorAll('.card3');
            for (let j = 0; j < card3.length; j++) {
                let delete_card3 = document.createElement('div');
                delete_card3.className = 'delete3';
                delete_card3.innerHTML = "X";
                card3[j].appendChild(delete_card3);

                delete_card3.addEventListener('click', () => {
                    card_wrapper3.removeChild(card3[j]);
                })
            }
        }
        newCard3.value = '';
    }
})

new Sortable(card_wrapper3, {
    animation: 400
});


let card_wrapper4 = document.querySelector('.wrapper4');
let newCard4 = document.querySelector('.card_name4');
let addCards4 = document.querySelector('.add-card4');

let cardList4 = [];

addCards4.addEventListener('click', () => {
    if (newCard4.value != '') {
        cardList4.push(newCard4.value);
        // console.log(cardList)  

        let newCard_list4 = document.createElement('div');
        newCard_list4.className = 'card4';

        for (let i = 0; i < cardList4.length; i++) {
            newCard_list4.innerHTML = newCard4.value;
            card_wrapper4.appendChild(newCard_list4);
        }


        if (cardList4.length > 0) {
            let card4 = document.querySelectorAll('.card4');
            for (let j = 0; j < card4.length; j++) {
                let delete_card4 = document.createElement('div');
                delete_card4.className = 'delete4';
                delete_card4.innerHTML = "X";
                card4[j].appendChild(delete_card4);

                delete_card4.addEventListener('click', () => {
                    card_wrapper4.removeChild(card4[j]);
                })
            }
        }
        newCard4.value = '';
    }
})

new Sortable(card_wrapper4, {
    animation: 400
});
