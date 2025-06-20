const ShimmerUI =()=>{
    return <div className="flex flex-wrap">
        {[1,2,3,4,5,6,7,8,9].map((i)=><div key={i} className="w-[200] h-80 m-1.5 p-1.5 bg-gray-100"></div>
        )}

    </div>
}
export default ShimmerUI;