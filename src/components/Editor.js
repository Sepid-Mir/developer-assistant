import React from 'react'
import { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
  const { displayName,
    language,
    value,
    onChange } = props

  const handleChange = (editor, data, value) => {
    onChange(value);
  }
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(prevOpen => !prevOpen)}
          type="button"
          className= "expand-collapse-btn">
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          mode: language,
          theme: 'material',
          readOnly: false
        }}




      />
    </div>
  )
}

export default Editor
