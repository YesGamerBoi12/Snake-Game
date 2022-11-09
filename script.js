const reviewBlock=document.querySelector('.ReviewContent');
console.log("helo wold");
const data=[
    {
        name:'Anant PS.',
        headingReview:'Thanks!',
        text:'You helped me to be a good programmer insted you helped me to learn java! Thanks Team Dark Sky!',
    },
    {
        name:'Jay Aditya K.',
        headingReview:'Hello',
        text:'Jay here, I am here thank you for the programming classes. The lessons which were taught are helping me in my career of coding! and all credit goes to Dark Sky Studios! '
    },
    {
        name:'Yug R.',
        headingReview:'Amazing',
        text:'Yoo! Here you can easily learn programming!!! les gooooo!'
    },
    {
        name:'Mr.RealBakaMC :)',
        headingReview:'Nice classes',
        text:'The things which are taught are actually very useful! you deserve 5 stars! keep your hard work going on non-stop! '
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