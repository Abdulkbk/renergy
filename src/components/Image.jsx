import Image from "next/image";
import sensor from "../../public/assets/solimg.jpeg";

function ImageBox() {
	return (
		<div className='w-screen flex justify-center items-center p-5 h-screen'>
			<Image src={sensor} alt='Sensor Image' width='600' height='500' />
		</div>
	);
}

export default ImageBox;
