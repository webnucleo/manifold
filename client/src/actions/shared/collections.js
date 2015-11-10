import {createAction} from 'redux-actions';
import TextsAPI from '../../api/texts';

export const fetchTexts = createAction('FETCH_TEXTS', () => TextsAPI.texts());
export const fetchOneText = createAction('FETCH_ONE_TEXT', (id) => TextsAPI.text(id));