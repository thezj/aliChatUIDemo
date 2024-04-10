import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Typing } from '../../UIsrc';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <div className="Message left">
        <Typing />
      </div>
    </DemoSection>
  </DemoPage>
);
