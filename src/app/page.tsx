'use client'

import styled from 'styled-components';
import { useState } from 'react'
import { SelectorTypes } from '@/helpers/types/types';
import { MindMap } from '@/components/sections/mindmap/mindmap';
import { PageContainer } from './page.styled';

export default function Home() {
  const [section, setSection] = useState<SelectorTypes>('mindmap')

  let SelectedSection
  switch (section) {
    case 'mindmap': 
      SelectedSection = <MindMap />
      break
  }

  return (
    <PageContainer>
      {SelectedSection}
    </PageContainer>
  );
}
