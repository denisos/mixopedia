import { useCallback, useState, useEffect, useMemo } from 'react';

import DebouncedInput from '../../sharedcomponents/debouncedInput/DebouncedInput';
import { useDebounceValue, useDebounceFunction } from '../../hooks/useDebounce';

import TextField from '../../sharedcomponents/textField/TextField';
import Button from '../../sharedcomponents/button/Button';

import './About.css';

export default function About() {
  const [name, setName] = useState({
    value: "",
    hasError: false, 
    touched: false
  });
  const [address, setAddress] = useState({
    value: "",
    hasError: false,
    touched: false
  });
  const [query, setQuery] = useState('');

  // just a regular handler for Name field which sets new value (no debouncing)
  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    setName(current => ({
      ...current,
      value: newName,
      hasError: newName?.length === 0
    }));
  }

  // debouncing for address
  // 1. handle it on the page with a custom useEffect
  // 2. just setup a timer in a handleOnChange method below [commented out]
  const handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setAddress(current => ({
      ...current,
      value: newAddress,
      hasError: newAddress?.length === 0,
      touched: true
    }));

    // could just handle it all inside the handler, but i think the reactive effect below is superior
    // if (timerId) {
    //   clearTimeout(timerId);
    //   console.log("onchange address, clear timer");
    // }

    // timerId = setTimeout(() => {
    //   console.log("execute debounced api call here with addr ", newAddress);
    // }, 600);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (address.value?.length) {
        console.log("execute debounced api call here with addr ", address.value);
      }
    }, 600); 

    return () => {
      console.log("clear the address timeout");
      clearTimeout(timerId);
    }
  }, [address.value]);

  // end 1. and 2. handle on the page


  const handleOnChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  // 3. useDebouncedValue custom hook and useEffect, first setup debounced value
  //  called debouncedQuery and when that debounced value changes then run the effect 
  const debouncedQuery = useDebounceValue(query);

  useEffect(() => {
    console.log("useDebounceValue debounced query, call api with  ", debouncedQuery);
  }, [debouncedQuery]);

  // end 3. useDebouncedValue custom hook usage
  

  // 4. useDebouncedFunction calls callback after certain debounced delay
  //  important: memoize the function with useCallback before pass to useDebounceFunction
  const fnForUseDebounceFunction = useCallback((value) => {
    console.log("useDebounceFunction, debounced callback invoked, value ", value);
  }, []);
  useDebounceFunction(query, fnForUseDebounceFunction);

  // end 4. useDebouncedFunction 


  // 4. callbacks for the DebouncedInput component
  const handleonOnDebouncedSearchChange = (value: string) => {
    console.log("DebouncedInput search handler invoked", value);
  };

  const handleonOnDebouncedQueryChange = (value: string) => {
    console.log("DebouncedInput query handler invoked", value);
  };

  // end 4. callbacks for the DebouncedInput component


  // onBlur is called when loses focus, naturally debounces, may work for your needs
  const handleOnBlurName = (e: React.FocusEvent<HTMLInputElement>) => {
    setName(current => ({
      ...current,
      touched: true
    }));
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submitting name ", name, address);
  }


  return (
    <div>
      <h2>About</h2>

      <form onSubmit={onSubmitForm}>
        <label>Name 
          <input type="text" value={name.value} onChange={handleOnChangeName} onBlur={handleOnBlurName}/>
          {name.touched && name.hasError && <div>Oops name error</div>}
        </label>

        <TextField id="address" 
          label="Address" 
          helperText="Helper text" 
          value={address.value} 
          onChange={handleOnChangeAddress} 
          error={address.touched && address.hasError}
          className="about-textfield"
        />

        <TextField id="city" 
          label="City" 
        />  


        {/* <label>Search DebouncedInput
          <DebouncedInput onDebouncedChange={handleonOnDebouncedSearchChange} />
        </label>

        <label>Query DebouncedInput
          <DebouncedInput onDebouncedChange={handleonOnDebouncedQueryChange} />
        </label> */}

        <label>Query useDebounceValue 
          <input 
            type="text" 
            value={query} 
            onChange={handleOnChangeQuery} 
          />
        </label>

        <div>
          <Button type="submit" theme="primary" size="medium">Submit</Button>
        </div>

      </form>

      <p>reactjs onChange in inputs works differently to plain javascript onchange input event.</p> 
      <p>In reactjs it records every character changed while in the input. In plain js it does not.  
      In plain js, it updates only if changed and focus out...not when typing in the input.
      </p>
      <p>onblur works the same for both react and plain js: called every time focus out, regardless if changed or not.</p>
      <p>Why not just use onblur then and set state onBlur? A. setting state is async, and if hitting 
        a submit btn right after change input then state may not be set in time. 
        But also depends on when you want, do you want updates as changes made or not? 
        If there a submit btn then that's a risk of not capturing the last input change.
        note: onBlur is called each time you focus out from the field, even if changed or not.</p>
      <p>Using debounce you can use onChange and only set state for the input if debounced.</p>
      <p>In this component I use a few different approaches for debouncing</p>
      <ol>
        <li>just handle it on the page iself in a custom useEffect fired when value changes</li>
        <li>you could also just setup a timer in a handleOnChange method, but I think a custom useEffect is better</li>
        <li>a useDebouncedValue custom hook</li>
        <li>a useDebouncedFunction custom hook</li>
        <li>a DebouncedInput component (not such a good idea since reruns on every render)</li>
      </ol>   

      <a href="https://www.codingdeft.com/posts/react-onblur-onchange/">interesting post </a>


      <div className="about-container" style={{display: "flex", justifyContent: "space-between" }}>
        <div className="about-select-list" style={{backgroundColor: "magenta"}}>
          An about select list
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          Another about selectlist
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          A third selectlist
        </div>
      </div>

    </div>

  );
}
