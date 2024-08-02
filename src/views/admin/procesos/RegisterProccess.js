import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={12} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Nombre del Proceso</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          placeholder="Ingresa el nombre del proceso"
          required
        />
        <CFormFeedback tooltip invalid>
          El nombre del Proceso es requerido
        </CFormFeedback>
      </CCol>
      <CCol md={12} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">Estado</CFormLabel>
        <CFormSelect id="validationTooltip04" required>
          <option disabled defaultValue="">
            Seleccionar estado...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback tooltip invalid>
          Debes seleccionar un estado
        </CFormFeedback>
      </CCol>

      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Registrar Proceso
        </CButton>
      </CCol>
    </CForm>
  )
}

const RegisterProccess = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registro de Proceso</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              En este formulario se realizara registro de los procesos
            </p>
            <div href="forms/#tooltips">{Tooltips()}</div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RegisterProccess
