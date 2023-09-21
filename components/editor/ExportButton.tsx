'use client'

import React, { memo, useEffect, useState } from 'react'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

const ExportButton = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [rawHtml, setRawHtml] = useState('')
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    setIsMounted(true)
  },[])
  if (!isMounted) {
    return null
  }
  const handleClick = () => {
    editor.update(() => {
      const editorState = editor.getEditorState()
      const jsonString = JSON.stringify(editorState)
      console.log('jsonString', jsonString)

      const htmlString = $generateHtmlFromNodes(editor, null)
      console.log('htmlString', htmlString)
      setRawHtml(htmlString)
    })
  }
  return (
    <div>
      <button onClick={handleClick}>Clicke me</button>
      <div
        dangerouslySetInnerHTML={{
          __html: rawHtml,
        }}
      ></div>
    </div>
  )
}

export default memo(ExportButton)
