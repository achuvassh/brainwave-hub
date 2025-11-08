'use client'

import { useState } from 'react'
import { SelectorTypes } from '@/helpers/types/types';
import { MindMap } from '@/components/sections/';
import { PageContainer } from './page.styled';

export default function Home() {
  const [section, setSection] = useState<SelectorTypes>('mindmap')

  const switchSection = (section: SelectorTypes) => {
    setSection(section)
  }

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
