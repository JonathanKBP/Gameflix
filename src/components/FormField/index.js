import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  
  textarea {
    min-height: 150px;
  }
  
  input[type="color"] {
    padding-left: 56px;
    padding-bottom: 7px;
    padding-top: 7px
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: var(--white);
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: var(--grayMedium);
  color: var(--white);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--grayMedium);
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}
`;

function FormField({
  as, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={as}
          type={type}
          id={fieldId}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  as: 'input',
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;