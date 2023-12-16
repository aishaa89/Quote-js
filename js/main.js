

var quotes=[
    {
        quote: '"The Way Get Started Is To Quit Talking And Begin Doing"',
        source: "--Walt Disney"
       
      },
      {
        quote:'"Don’t Let Yesterday Take Up Too Much Of Today."',
        source: "--Will Rogers"
      
      },
      {
        quote: '"We Generate Fears While We Sit. We Overcome Them By Action"',
        source: "--Dr. Henry Link"
        
      },
      {
        quote: '"Early to bed and early to rise, makes a man healthy wealthy and wise."',
        source: "--Benjamin Franklin"
      },
      {
        quote: '"Let food be thy medicine and medicine be thy food."',
        source: "--Hippocrates"
      },
      {
        quote: '"If you can’t pronounce it, don’t eat it."',
        source: "--Common Sense"
      },
     
      {
        quote: '"Life is really simple, but men insist on making it complicated."',
        source: "--Confucius"
      },
      {
        quote:' "My religion is very simple. My religion is kindness."',
        source: "--Dalai Lama"
      },
      {
        quote:' "Knowing others is wisdom; knowing the self is enlightenment."',
        source: "--Tao Te Ching"
    
      } 
]

function showQuotes(){
    var randomNum=Math.random() *  (quotes.length);
    var result=Math.floor(randomNum);
    document.getElementById("quotetext").innerHTML=quotes[result].quote;
    document.getElementById("source").innerHTML=quotes[result].source;

}