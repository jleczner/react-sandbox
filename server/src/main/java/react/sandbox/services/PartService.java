package react.sandbox.services;

import org.springframework.stereotype.Service;

@Service
public class PartService {
    private PartRepository partRepository;

    public PartService(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    public Iterable<Part> getAllParts() {
        return partRepository.findAll();
    }
}
