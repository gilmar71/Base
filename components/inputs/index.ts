import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { YupValidation } from 'src/utils/yup-validation';

import { InputCep } from './inputCep';
import { InputMask } from './input-mask';
import { InputComponent } from './input';
import { SelectComponent } from './select';
import { TextAreaComponent } from './textarea';

export {
  Form,
  InputCep,
  InputMask,
  YupValidation,
  InputComponent,
  SelectComponent,
  TextAreaComponent,
};

export type { FormHandles };
