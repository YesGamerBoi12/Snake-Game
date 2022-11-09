const reviewBlock=document.querySelector('.ReviewContent');
console.log("helo wold");
const data=[
    {
        name:'Anant PS.',
        headingReview:'Thanks!',
        text:'Nice Pens!',
    },
    {
        name:'Jay Aditya K.',
        headingReview:'Hello',
        text:'Much ink helps to write much'
    },
    {
        name:'Yug R.',
        headingReview:'Amazing',
        text:'Lesss goooooooo! new pens ofcourse, try it!'
    },
    {
        name:'Mr.RealBakaMC :)',
        headingReview:'Nice',
        text:'These pens are nice!'
    }
];


reviewBlock.innerHTML='';
data.forEach((data,index)=>{
    const html=`<div class="review1">
<div class="customer-name">${data.name}<img class="tickmark" src="correct.png" alt=""></div>
<div class="star">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
</div>
<div class="headingReview">${data.headingReview}</div>
<p class="actualReview">${data.text}</p>
</div>`;

reviewBlock.insertAdjacentHTML('beforeend',html);
})
