import styled from 'styled-components';
import { device } from './constants/device'
import Button from './components/Button';
import React, { useEffect, useState } from "react";
import View from './layout/View'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import dateToday from './utils/dateToday';
import Field from './components/Field'
import Sidebar from './layout/Sidebar'
import Form from './layout/Form'

const Wrapper = styled.div`
    display: flex;
    padding: 0;
	.title {
		background-color: rgba(45, 45, 45, 0.97);
		padding: 1em 0;
		text-align: center;
		align-items: center;
		h1 {
			span {
				color: darkgrey;
				:nth-of-type(even) {
					color: grey;
					}
				}
			}
		}
	}
	.fields {
		margin: 1em 2em;
	}
	.submission {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(45, 45, 45, 0.97);
		padding: 1em;
		margin-top: auto;
		button {
			margin: 0 1em;
		}
		@media ${device.tablet} {
			.full {
				display: block;
			}
			.mobile {
				display: none;
			}
		}
	}
	.full {
		display: none;
	}
	.group {
		margin-bottom: 2em;
		p {
			margin-bottom: 1em;
			font-size: 1.1em;
			font-weight: 700;
		}
	}
`;

function App () {

	const template = './ManilaCOVAX.pdf';

	const fields = {
		name: "",
		age: "",
		address: "",
		dose1: {
			brand: "",
			date: "",
			site: "",
		},
		dose2: {
			brand: "",
			date: "",
			site: "",
		}
	};
	
    const [document, setDocument] = useState(fields)

	const generatePDF = async () => {

		const existingPdfBytes = await fetch(template).then(res => res.arrayBuffer())
		const pdfDoc = await PDFDocument.load(existingPdfBytes)
		const pages = pdfDoc.getPages()
		const firstPage = pages[0]
		const Helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
		const { width, height } = firstPage.getSize()
		const fontSize = 11

		firstPage.drawText(`This is to certify that ${document.name}, ${document.age} years of age, a resident of ${document.address}, was fully inoculated by the Manila Health Department.`, {
			x: 72,
			y: height - 18 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
			Center: 1,
		})

		firstPage.drawText(`${document.dose1.brand}`, {
			x: 252,
			y: height - 29.6 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`${document.dose1.date}`, {
			x: 252,
			y: height - 31.7 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`${document.dose1.site}`, {
			x: 252,
			y: height - 33.7 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`${document.dose2.brand}`, {
			x: 432,
			y: height - 29.6 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`${document.dose2.date}`, {
			x: 432,
			y: height - 31.7 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`${document.dose2.site}`, {
			x: 432,
			y: height - 33.7 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})

		firstPage.drawText(`This certificate is issued this ${dateToday()} stircitly for demontration purposes only.`, {
			x: 62,
			y: height - 45 * fontSize,
			size: fontSize,
			font: Helvetica,
			maxWidth: 510,
		})
		// Serialize the PDF document to Uint8Array.

		const pdfBytes = await pdfDoc.save()
		
		// Create an accessible data:blob that can be rendered into an <iframe> element.

		const blob = new Blob([pdfBytes], {'type': 'application/pdf'});
		const newURL =  URL.createObjectURL(blob);
		setPDF(newURL);
		
	}

	useEffect(() => {
		generatePDF();
	}, [])
	
	const handleSubmit = (event) => {
		event.preventDefault()
		event.stopPropagation();
		console.log(event)
		generatePDF();
	};

	const handleInputChange = (event) => {
		setDocument((prevProps) => ({
			...prevProps,
			[event.target.name]: event.target.value
		}))
	}

	const [PDF, setPDF] = useState();
	
    return  (
        <>
        <Wrapper>
            <Sidebar>
                <div className='title'></div>
                <Form>
					<div className='group'>
						<p>Patient number</p>
						<Field  name='name' value={document.name} onChange={handleInputChange} />
					</div>
					<div className='group'>
						<p>Personal details</p>
						<Field label='Name' name='name' value={document.name} onChange={handleInputChange} />
						<Field label='Age' name='age' value={document.name} onChange={handleInputChange} />
						<Field label='Address' name='address' value={document.name} onChange={handleInputChange} />
					</div>
					<div className='group'>
						<p>1st dose</p>
						<Field label='Brand' name='name' value={document.name} onChange={handleInputChange} />
						<Field label='Date administered' name='brand' value={document.name} onChange={handleInputChange} />
						<Field label='Vaccination site' name='name' value={document.name} onChange={handleInputChange} />
					</div>
					<div className='group'>
						<p>2nd dose</p>
						<Field label='Brand' name='name' value={document.name} onChange={handleInputChange} />
						<Field label='Date administered' name='brand' value={document.name} onChange={handleInputChange} />
						<Field label='Vaccination site' name='name' value={document.name} onChange={handleInputChange} />
					</div>
                </Form>
                <div className='submission'>
                    <Button onClick={handleSubmit} type="submit" className='mobile'>Generate PDF</Button>
                    <Button onClick={handleSubmit} type="submit" className='full'>Generate</Button>
                    <Button onClick={handleSubmit} type="submit" className='full' transparent>Save</Button>
                </div>
            </Sidebar>
            <View>
                <iframe title='Vaccination Certificate'src={PDF} />
            </View>
        </Wrapper>
        </>
    )
}

export default App;