"use client";
import { IconUsers   } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Evento } from "@/src/schemas";
import {formatDate} from '@/utils/Date'


const LatestEventCard = ({
  bannerEvento,
  nombreEvento,
  descripcionCorta,
  fechaInicio,
  cantidadDisponible,
  subCategoria

}: Evento) => {

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 play-button-container">
      <div className="latest__item overhid ralt">
        <div className="thumb ralt mb-16 transition overhid">
          <Image
            src={bannerEvento}
            className="w-100 transition overhid h-auto"
            alt="img"
            width={528}
            height={400}
          />
          <Link href="#" className="l__badge">
            {subCategoria}
          </Link>
        </div>
        <div className="content">

          <div className="d-flex align-items-center justify-content-between mb-16">
            <span className="cmn__date ralt fw-500 bodyfont fs-14 base2 d-block">
              {formatDate(fechaInicio)}
            </span>
            <Link
              href="#"
              className="d-flex white w-500 bodyfont align-items-center gap-3"
            >
              <IconUsers  className="base fs-20" />
              {cantidadDisponible}
            </Link>
          </div>

          <h4>
            <Link href="blog-details" className="white">
              {nombreEvento}
            </Link>
          </h4>
          <p className="pra bodyfont d-block mb-28">{descripcionCorta}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestEventCard;
