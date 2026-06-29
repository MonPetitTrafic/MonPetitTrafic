import prb_mineur from '@/assets/icons/perturbation_mineure.png'
import prb_majeur from '@/assets/icons/perturbation_majeure.png'
import prb_interrupt from '@/assets/icons/interruption.png'

export const prbs = {
    prb_mineur,prb_majeur,prb_interrupt
}

export type PrbIcons = keyof typeof prbs