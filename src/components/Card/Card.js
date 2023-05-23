import './Card.css';

export default function Card() {
  return (
     <div className="text-center py-10">
        <h1 className="head text-3xl w-100 mx-auto leading-normal">
        Cancellation, Exchange & Refunds
        </h1>
        <h5 className="text-heading_color text-head_btn mb-12">Read them Carefully</h5>
        <div className="tab flex max-w-7xl mx-auto gap-12 group">
            <div className="box t1 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                <h4 className="uppercase text-xl font-bold">🚫 Cancellation</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                As a general rule, if you have prepaid for your order, you shall not be entitled to cancel your order once it has been confirmed. If your order involves payment at the time of handover of purchased goods, any cancellation over 15 minutes after confirmation will attract a Cancellation Fee of Rs 50, which would be added to your next order. In the unlikely event the packaging of the purchased items or the items themselves are found to have been tampered or are damaged at the time of handover to you, you can opt for an exchange as per the Exchange policy below.
                </p>
            </div>
            <div className="box t2 bg-white/10 duration-500 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                <h4 className="uppercase text-xl font-bold text-green_btn">💸 Exchanges</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                In the unlikely event the packaging of the purchased items or the items themselves are found to have been tampered or are damaged at the time of handover to you, you may immediately show this to the delivery rider who will take back the tampered/damaged item/items and handover an un-damaged replacement of the same item/items. If the same brand/item is not available, you may accept a different brand as a replacement. If you choose not to, you must return the tampered/damaged item/items to the rider and reach out to us at support@quickk.co.in, where we will offer you a credit with the same order value to be used at another time on Quickk within 7 days.
                </p>
            </div>
            <div className="box t3 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer  p-8 rounded-xl mix-blend-luminosity">
                <h4 className="uppercase text-xl font-bold text-blue_btn">📑 Refunds</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                You shall be entitled to a refund only in the event of a payment error on our website/payment gateway, where money has been taken from your end but the order fails to confirm. In such cases, our system automatically detects and refunds these failed payments through the same payment instrument you used within 3-7 business days by the terms that may be stipulated by the bank which has issued the payment instrument. If you find that it has taken more than 14 days from the time of the payment to receive your money back, you may reach out to our team at help@quickk.co.in  to resolve this for you. Our decision on refunds shall be at our sole discretion and shall be final and binding.
                </p>
            </div>
        </div>
    </div>
  )
}
