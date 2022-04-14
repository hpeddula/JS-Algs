import react , {Suspense, useRef} from 'react';
// React.lazy(()=>(...pathOFComponent))
{/* <Suspense fallback={<>...Loading</>}>
    <CompA />
    <CompB />
</Suspense> */}
const App = () => {
    const divRef = useRef(null);

    return ( 
        <div
        id="firstDiv"
        ref={divRef}
        onClick={(e)=> divRef.current.id}
        >
            'Hello World'
        </div>
    )
}

fetch('',{
    body:JSON.stringify({}),
    mode:'cors',
    method:'POST',
    headers:`Bearer ${authToken}`
})