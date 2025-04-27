import {
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import {formatDate} from '@/utils/Date'
import { Evento } from "@/src/schemas";

const FeatureEventRightCard = ({
  bannerEvento,
  nombreEvento,
  descripcionCorta,
  fechaInicio,
  precio

}: Evento) => {

  return (
    <div className="col-xxl-4 col-md-6 ">
      <div className="featured__show ralt">
        <div className="thumb overhid ralt">
          <Image
            src={bannerEvento}
            className="w-100 transition overhid h-auto"
            alt="img"
            width={390}
            height={370}
          />
        </div>
        <div className="f__showcontent">
          <div className="d-flex align-items-center mb-16 justify-content-between">
            <span className="fs-14 show__date ralt fw-500 base2 d-block">
              {/* Formatear fecha */}
              {formatDate(fechaInicio)}
            </span>
            <span className="fs-14 fw-500 base2 d-block">
              $ {precio}
            </span>
          </div>
          <h4 className="mb-16">
            <Link href="show-details" className="white">
              {nombreEvento}
            </Link>
          </h4>
          <p className="pra bodyfont d-block mb-28">{descripcionCorta}</p>
          <div className="d-flex align-items-center justify-content-between">
            <Link href="show-details" className="cmn__arrow40">
              <IconArrowNarrowRight className="arrowrotate" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureEventRightCard;
