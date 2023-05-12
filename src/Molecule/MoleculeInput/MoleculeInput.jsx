import React, { useState} from 'react';
import { Checkbox, Icon, Input, Text } from '../../Atom';
import PropTypes from 'prop-types';
import ClickAwayListener from 'react-click-away-listener';
const MoleculeInput = props => {
  const [visible, setVisibility] = useState(false);
  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState('');
  const className = 'container-generic-input';
  let inputClassName = props.className;
  if (props.icon) {
    inputClassName += ' padding-input-icon';
  }
  function viewLabel() {
    if (props.inputLabel !== null) {
      return <Text className={props.labelClassName} text={props.inputLabel} />;
    } else {
      return null;
    }
  }
  function viewErrorMsg() {
    if (props.errorMsg !== null) {
      return <Text className={props.errorMsgClassName} text={props.errorMsg} />;
    }
    return null;
  }
  function viewIcon(icon, className, size) {
    if (icon !== null) {
      return <Icon icon={icon} className={className} size={size} />;
    }
    return null;
  }
  function viewInput() {
    return (
      <div>
        <Input
          as={props.as}
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isValid={props.isValid}
          className={inputClassName}
          onChange={props.onChange}
          readOnly={props.readOnly}
          value={props.value}
          bsPrefix={props.bsPrefix}
          id={props.id}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          feedback={props.feedback}
          feedbackTooltip={props.feedbackTooltip}
          type={props.type}
          size={props.size}
          password={props.password}
        />
        {viewIcon(props.icon, 'icon-search', '12px')}
      </div>
    );
  }
  function renderOption(text, key) {
    function onSelect(key) {
      if (props.multipleSelect !== true) {
        props.onChange(props.options[key].value);
        setValue(props.options[key].value);
        setVisibility(false);
      } else {
        const list = [...value];
        const index = list.indexOf(props.options[key].value);
        if (index === -1) {
          list.push(props.options[key].value);
        } else {
          list.splice(index, 1);
        }
        props.onChange(list);
        setValue(list);
        setVisibility(true);
      }
    }
    return (
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={() => onSelect(key)}
      >
        {props.multipleSelect && props.as === "select" && (
          <Checkbox
            checked={
              value.indexOf(props.options[key].value) === -1 ? false : true
            }
            className='checkbox-input-select'
          />
        )}
        <Text
          className='default-option-input-select'
          type='h3'
          text={text}
          key={key}
          filter={props.search}
          filterText={filter}
        />
      </div>
    );
  }
  function viewOptions() {
    let classNameContainer = 'container-option-input-select ';
    if (props.size === 'medium') {
      classNameContainer += ' default-medium-input ';
    }
    if (props.size === 'larg') {
      classNameContainer += ' default-large-input ';
    }
    if (props.size === 'small') {
      classNameContainer += ' default-small-input ';
    }
    let listOptions = [];
    if (!props.search || (props.search && filter === '')) {
      listOptions = props.options;
    } else {
      listOptions = props.options.filter(el =>
        el.text.toLowerCase().startsWith(filter.toLowerCase())
      );
    }
    return (
      <div className={classNameContainer}>
        {props.options && listOptions.map((el, i) => renderOption(el.text, i))}
      </div>
    );
  }
  function returnValue() {
    if (props.search) {
      return filter;
    } else {
      if (props.value && value.length===0) {
        setValue(props.value);
      } else {
        if (props.multipleSelect === true) {
          let inputValue = '';
          value.map(el => {
            inputValue += el + '; ';
          });
          return inputValue;
        } else {
          return value;
        }
      }
    }
  }
  function renderSelect() {
    inputClassName += ' input-select ';
    let iconClassName = 'icon-input-select ';
    if (visible === true) {
      iconClassName += ' icon-input-select-open';
    }
    return (
      <ClickAwayListener onClickAway={() => setVisibility(false)}>
        <div>
          <div onClick={() => setVisibility(true)}>
            <Input
              as={props.as}
              disabled={props.disabled}
              isInvalid={props.isInvalid}
              isValid={props.isValid}
              className={inputClassName}
              onChange={e => (props.search ? setFilter(e.target.value) : null)}
              readOnly={!props.search}
              value={returnValue()}
              bsPrefix={props.bsPrefix}
              id={props.id}
              placeholder={props.placeholder}
              defaultValue={props.defaultValue}
              feedback={props.feedback}
              feedbackTooltip={props.feedbackTooltip}
              size={props.size}
            />
          </div>
          {props.as === "select" && viewIcon('SortTop', iconClassName, '8px')}
          {visible ? viewOptions() : null}
        </div>
      </ClickAwayListener>
    );
  }
  function renderInput() {
    if (props.as === 'input') {
      return viewInput();
    } else {
      if (props.as === 'select' || props.as === "auto") {
        return renderSelect();
      }
    }
  }
  return (
    <div>
      {viewLabel()}
      <div className={className}>{renderInput()}</div>
      {viewErrorMsg()}
    </div>
  );
};
MoleculeInput.defaultProps = {
  as: 'input',
  disabled: false,
  isInvalid: false,
  isValid: false,
  className: '',
  onChange: null,
  readOnly: false,
  value: null,
  bsPrefix: null,
  id: null,
  placeholder: 'Texte',
  defaultValue: null,
  feedback: false,
  feedbackTooltip: false,
  password: false,
  size: 'medium',
  labelClassName: 'default-label',
  inputLabel: null,
  icon: null,
  errorMsg: null,
  errorMsgClassName: 'default-error-msg',
  options: null,
  multipleSelect: false,
  search: false
};
MoleculeInput.propTypes = {
  as: PropTypes.oneOf(['input', 'select', "auto"]),
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.any,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  bsPrefix: PropTypes.string,
  id: PropTypes.any,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  feedback: PropTypes.any,
  feedbackTooltip: PropTypes.any,
  password: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  labelClassName: PropTypes.string,
  inputLabel: PropTypes.string,
  icon: PropTypes.string,
  errorMsg: PropTypes.string,
  errorMsgClassName: PropTypes.string,
  options: PropTypes.array,
  multipleSelect: PropTypes.bool,
  search: PropTypes.bool,

};
export default MoleculeInput;
