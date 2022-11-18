import { fromEvent, Observer } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<PointerEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const observer = {
    next: ( value ) => console.log('eventnext', value)   
}



src1$.subscribe( ({ x, y }) => {
    console.log(x);
    console.log(y);    
});
src2$.subscribe( ({ key })=>{
    console.log(key);
    
});





