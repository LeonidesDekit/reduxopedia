import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incremenent, decrement, decrementMultiplier, incremenentMultiplier } from '../../redux/slice/counterSlice';
import { useState } from 'react';

function Counter() {
    const count = useSelector((state) => state.counterStore.count)
    const dispatch = useDispatch();
    const [multiplier, setMultiplier] = useState(10);

    return (
        <div className="mt-2 pl-3 text-center border-top">
            <div className="text-white pb-2 h4">
                Counter : {count}
            </div>
            <div className="row">
                <div className="col-md-6 col-12 p-4">
                    <div className="p-4 border">
                        <h4 className="text-success pb-2">Basic Counter</h4>
                        <button className="btn btn-primary" onClick={() => dispatch(incremenent())}>Add</button> &nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Remove</button>
                    </div>
                </div>
                <div className="col-md-6 col-12 p-4">
                    <div className="p-4 border">
                        <h4 className="text-success pb-2">Multiplier Counter</h4>
                        <div className="row">
                            <div className="col-4 p-1">
                                <input placeholder="multiplier" className="form-control" type="test" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} />
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-primary form-control" onClick={() => dispatch(incremenentMultiplier(multiplier))}>Add</button>
                            </div>
                            <div className="col-4 p-1">
                                <button className="btn btn-danger form-control" onClick={() => dispatch(decrementMultiplier(multiplier))}>Remove</button>
                            </div>
                        </div>
                        {/* <button className="btn btn-primary" onClick={() => dispatch(incremenent())}>Add</button> &nbsp;
                        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Remove</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter