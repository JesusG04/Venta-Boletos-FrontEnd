import {
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Evento } from "@/src/schemas";
import { formatDate } from '@/utils/Date'

const FeatureShowRightCard = ({
  bannerEvento,
  nombreEvento,
  fechaInicio,
  precio

}: Evento) => {
  return (
    <div className="showbox mb-16 d-flex align-items-center gap-3">
      <div className="s__img">
        <Image
          src={bannerEvento}
          alt="img"
          width={200}
          height={135}
          className="object-fit-cover "
        />
      </div>
      <div className="s__content">
        <span className="fs-14 fw-500 base2 mb-2 d-block">
          $ {precio}
        </span>
        <h5 className="mb-0">
          <Link href="#0" className="white">
            {nombreEvento}
          </Link>
        </h5>
        <span className="fs-14 fw-500 base2 mb-2 d-block">
          $ {formatDate(fechaInicio)}
        </span>
        <div className="d-flex align-items-center ">
          <Link href="show-details" className="cmn__arrow40">
            <IconArrowNarrowRight className="fs-24 arrowrotate" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowRightCard;
