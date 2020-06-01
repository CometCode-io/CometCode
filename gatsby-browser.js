import './src/styles/shared.scss';
import 'antd/dist/antd.css';
import { wrapRootElement as wrap } from './root-wrapper';

import Prism from 'prism-react-renderer/prism';
import dartLang from 'refractor/lang/dart';
import protobuf from 'refractor/lang/protobuf';
import * as firebase from 'firebase';

firebase.analytics();

dartLang(Prism);
protobuf(Prism);
export const wrapRootElement = wrap;
