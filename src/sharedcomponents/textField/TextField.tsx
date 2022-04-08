
// this is my simple implementation of materialui TextField
//   https://mui.com/components/text-fields/
//   https://github.com/mui/material-ui/tree/master/packages/mui-material/src/TextField
//
// I'm wrapping an input in a fieldset with legend where the label appears
//  pass params similar to TextField, pass error to show error state
// but the Material ui implementation is a lot more complex and has more states
//  1. waiting for input state: a label and input inside an inline-flex div 
//   the label element is positioned absolute and centered in the the input
//  2. editing in the input: 
//   animates out the label in the input and shows the hidden legend (but keeps the legend text hidden
//   switches to using a fieldset with a legend wrapped around the input
//     and uses the label for the legend text). I believe keeping the label is done for accessability 
//     purposes so can click on the label and focus on the input
//  It's complex and very cool
// 
import './TextField.css';

// type Variant = 'input' | 'filledInput' | 'outlinedInput';

export default function TextField(props: any) {
  const { 
    id, label, helperText, error,
    variant = 'filledInput',
    ...rest
  } = props;

  const labelId = label && id ? `${id}-label` : undefined;
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

  return (
    <div className="text-field-box">
      <fieldset className={`text-field-container ${error ? "error" : ""}`}>
        <legend>
          <span className={`text-field-legend ${error ? "error" : ""}`}>{label}</span>
        </legend>

        <input id={id} {...rest} className="text-field-input" placeholder={label}/>

      </fieldset>

      {helperText && 
        <p className={`text-field-helper-text ${error ? "error" : ""}`} id={helperTextId}>{helperText}</p>
      }
    </div>
  )
}
