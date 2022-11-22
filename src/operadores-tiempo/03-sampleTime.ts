import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";


const clicks$ = fromEvent<PointerEvent>( document, 'click' );

clicks$
.pipe(
    sampleTime( 2000 ),
    map( ({ x, y }) => ({ x, y }) )
)
.subscribe(
    console.log
) 





