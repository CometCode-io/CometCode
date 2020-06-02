import './src/styles/shared.scss';
import 'antd/dist/antd.css';
import { wrapRootElement as wrap } from './root-wrapper';
import 'firebase/analytics';

import Prism from 'prism-react-renderer/prism';
import dartLang from 'refractor/lang/dart';
import protobuf from 'refractor/lang/protobuf';

dartLang(Prism);
protobuf(Prism);
export const wrapRootElement = wrap;
