"use client"
import { useState } from "react"
import Image from "next/image"
import styles from './Description.module.sass'
import classNames from "classnames/bind"

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder)

    const cx = classNames.bind(styles)

    const buttonStyle = cx("Description__button",{
        'button--border': hasBorder,
    })

    console.log(buttonStyle)

    return (
        <section>
            <h1>descripcion</h1>
            <button onClick={handleClick} className={buttonStyle}>
            <div className={styles.Description__imageContainer}>
            <Image src="/images/description.jpeg" alt="products marketplace" fill
//            width={500} height={300} 
//           quality={100} priority={false}
                placeholder="blur" blurDataURL={PLACEHOLDER_IMAGE}
            />
            </div>
            </button>
            <p>patatata</p>
        </section>
    )
}