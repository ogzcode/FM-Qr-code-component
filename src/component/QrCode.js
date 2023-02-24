import qrCode from "../img/image-qr-code.png";

function QrCode() {
    return (
        <div className='w-80 bg-white p-4 rounded-xl text-center'>
            <img src={qrCode} alt='qr-code' className='rounded-lg' />
            <div className='px-4'>
                <h2 className='mt-5 text-xl text-[#1f3251] font-bold'>
                    Improve your front-end skills by building projects
                </h2>
                <p className='text-[#7b879d] text-sm mt-3 font-light'>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    );
}

export default QrCode;