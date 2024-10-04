
import Link from "next/link";
export default function Home(){
  return (
    <div style={{ textAlign: 'center' }}>
  <p className="text-left text-black font-bold" 
     style={{ margin: '20px', padding: '15px',}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
    Suscipit dicta accusantium adipisci consectetur possimus!<br/>
    Magnam quasi nostrum quia est asperiores fuga veniam ipsa enim,<br/>
    maiores, aperiam atque suscipit blanditiis adipisci.
  </p>
  <img 
    src="https://cdn.pixabay.com/photo/2017/05/30/12/21/tea-2356770_1280.jpg" 
    style={{ width: '400px', display: 'block', margin: '0 auto' }} 
    alt="Tea Image"
  />
</div>
  )
}
